import React, { createContext, useContext, useState, useEffect } from 'react';
import supabase from '../supabaseClient';

const WaterLevelContext = createContext();

export const useWaterLevel = () => {
  return useContext(WaterLevelContext);
};

export const WaterLevelProvider = ({ children }) => {
  const [waterLevel, setWaterLevel] = useState(0.0);
  const [isPumpOn, setIsPumpOn] = useState(false);

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const { data: waterData, error: waterError } = await supabase
          .from('water_level')
          .select('water_level, pump_status')
          .order('created_at', { ascending: false })
          .limit(1);

        if (waterError) throw waterError;

        if (waterData && waterData.length > 0) {
          setWaterLevel(waterData[0].water_level / 100);
          setIsPumpOn(waterData[0].pump_status);
        }
      } catch (error) {
        console.error('Error fetching initial data:', error);
      }
    };

    fetchInitialData();

    const waterLevelSubscription = supabase
      .channel('public:water_level')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'water_level' }, payload => {
        setWaterLevel(payload.new.water_level / 100);
        setIsPumpOn(payload.new.pump_status);
      })
      .subscribe();

    return () => {
      supabase.removeChannel(waterLevelSubscription);
    };
  }, []);

  return (
    <WaterLevelContext.Provider value={{ waterLevel, isPumpOn }}>
      {children}
    </WaterLevelContext.Provider>
  );
};

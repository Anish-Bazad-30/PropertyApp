import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  async setPreference(dataKey: string, dataValue: string) {
    try {
      await Preferences.set({ key: dataKey, value: dataValue });
    } catch (error) {
      console.error('Error setting preference:', error);
      throw error;
    }
  }
 
  async getPreference<T = string>(dataKey: string, parseJson: boolean = false): Promise<T | string | null> {
    try {
      const result = await Preferences.get({ key: dataKey });
      const value = result.value;
  
      if (value && parseJson) {
        return JSON.parse(value);
      }
  
      return value;
    } catch (error) {
      console.error('Error getting preference:', error);
      return null;
    }
  }
 
  async removePreference(dataKey: string): Promise<any> {
    try {
      await Preferences.remove({ key: dataKey });
    } catch (error) {
      console.error('Error getting preference:', error);
      throw error;
    }
  }
 
  async clearPreference() {
    try {
      await Preferences.clear();
    } catch (error) {
      console.error('Error setting preference:', error);
      throw error;
    }
  }
}

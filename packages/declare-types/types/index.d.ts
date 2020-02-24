import { mapkit } from "./geocoder";

export declare global {
  interface Window {
    bob: number;
    mapkit: {
      Geocoder: typeof mapkit.Geocoder;
    };
  }
}

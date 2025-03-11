import React, { useEffect } from 'react';
import { Platform } from 'react-native';
import { BannerAd, BannerAdSize, TestIds, MobileAds } from 'react-native-google-mobile-ads';

// Set up AdMob request configuration (COPPA, GDPR compliance)
useEffect(() => {
    MobileAds()
        .setRequestConfiguration({
            tagForChildDirectedTreatment: true, // Ensures COPPA compliance
            tagForUnderAgeOfConsent: true, // Ensures GDPR compliance
        })
        .then(() => {
            console.log('AdMob request configuration set successfully');
        });
}, []);

// Use test ID in development, real ID in production
const adUnitId = __DEV__
    ? TestIds.ADAPTIVE_BANNER
    : Platform.OS === 'android'
        ? 'ca-app-pub-5330416188910245/2813919499' // Your real Android ad unit
        : ''; // Empty for iOS to prevent crashes

const Ads = () => {
    if (Platform.OS === 'ios') return null; // Skip ads on iOS

    return (
        <BannerAd
            unitId={adUnitId}
            size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
            requestOptions={{
                requestNonPersonalizedAdsOnly: true, // Ensures child safety (no targeted ads)
                networkExtras: {
                    collapsible: 'bottom',
                },
            }}
        />
    );
};

export default Ads;

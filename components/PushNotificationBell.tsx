"use client";

import React from "react";
import { usePushNotifications } from "@/hooks/usePushNotifications";
import { Bell, BellOff } from "lucide-react";
import { Button } from "@/components/ui/button";

export const PushNotificationBell = () => {
    const { requestPermissionAndSubscribe, permission, isSupportedBrowser } = usePushNotifications();

    if (!isSupportedBrowser) {
        return null; // hide completely if unsupported
    }

    if (permission === "granted") {
        return (
            <Button variant="ghost" size="icon" aria-label="Notifications Subscribed" disabled title="Notifications Subscribed">
                <Bell className="h-5 w-5 text-primary" />
            </Button>
        );
    }

    return (
        <Button 
            variant="outline" 
            size="sm" 
            onClick={requestPermissionAndSubscribe}
            className="flex items-center gap-2"
        >
            <BellOff className="h-4 w-4" />
            <span>Enable Notifications</span>
        </Button>
    );
};

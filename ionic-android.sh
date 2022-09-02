# Prima di eseguirelo script è necessario rimuovere a mano la cartella android
ionic build ## Produce la cartella www (capire)
ionic cap add android
#cp google-services.json android/app ## Per firebase analytics ## https://www.youtube.com/watch?v=_mks8zECJ7A ## Attualmente sembra che stia causando problemi per la partenza del software
ionic cap open android

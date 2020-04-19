import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

const SetLocaleContext = () => {
// Set the key-value pairs for the different languages to support.
  i18n.translations = {
    en: {
      welcome: 'Hello',
      search: 'Search...',
      shuttleBusSchedule: 'Shuttle Bus Schedule',
      calendar: 'Calendar',
      accessibility_on: 'Enable Accessibility',
      accessibility_off: 'Disable Accessibility',
      help: 'Help',
      back: 'Back',
      destinationSearch: 'Choose your destination',
      LOCATION_ALERT_TITLE: 'Location Services Required',
      LOCATION_ALERT_MESSAGE: 'Location services has not been enabled. Please allow this app to use your location.',
      LOCATION_ALERT_BUTTON: 'Open Settings',
      LogOut: 'Logout',
      AdjustTime: 'Adjust Time',
      SignIn: 'Sign In With Google',
      CalendarList: 'Available Calendars For Synchronization',
      SynchronizeCalendars: 'Synchronize Calendars',
      permisionNotGrandted: 'Permision Not Granted',
      allowNotifications: 'Please allow CONPASS to send you Notifications',
      numbersOnly: 'Please enter numbers only',
      logInAgain: 'Session Expired You need to log-in again',
      noAddress: 'There is no address or description for this event',
      getDirections: 'Get Directions ',
      cancel: 'Cancel',
      setRemindarTime: 'Set Reminder Time',
      remindarMessage: 'Set the time to be reminded before class/minutes',
      submit: 'Submit',
      CalendarListAlert: 'The following calendars will be synchronized'
    },
    fr: {
      welcome: 'Bonjour',
      search: 'Chercher...',
      calendar: 'Calendrier',
      shuttleBusSchedule: 'Horaire des Navettes',
      accessibility_on: 'Permettre L\'accessibilité',
      accessibility_off: 'Désactiver L\'accessibilité',
      help: 'Aide',
      back: 'Retour',
      LOCATION_ALERT_TITLE: 'Services de localisation requis',
      LOCATION_ALERT_MESSAGE: 'Les services de localisation n\'ont pas été activés. Veuillez autoriser cette application à utiliser vos informations de localisation.',
      LOCATION_ALERT_BUTTON: 'Ouvrir les paramètres',
      LogOut: 'Se déconnecter',
      AdjustTime: 'Ajuster l\'heure',
      SignIn: 'Connectez-vous avec Google',
      CalendarList: 'Calendriers disponibles pour la synchronisation',
      SynchronizeCalendars: 'Synchroniser les calendriers',
      permisionNotGrandted: 'Permission non accordée',
      allowNotifications: 'Veuillez autoriser CONPASS à vous envoyer des notifications',
      numbersOnly: 'S\'il vous plait entrez uniquement des nombres',
      logInAgain: 'Session expirée Vous devez vous reconnecter',
      noAddress: 'Il n\'y a pas d\'adresse ni de description pour cet événement',
      getDirections: 'Obtenir des directions',
      cancel: 'Annuler',
      setRemindarTime: 'Définir l\'heure de rappel',
      remindarMessage: 'Réglez l\'heure à rappeler avant le cours / les minutes',
      submit: 'soumettre',
      CalendarListAlert: 'Les calendriers suivants seront synchronisés'
    },
    sp: {
      welcome: 'Hola',
      search: 'Buscar...',
      calendar: 'Calendario',
      shuttleBusSchedule: 'Horario de Autobuses',
      accessibility_on: 'Permitir Accesibilidad',
      accessibility_off: 'Deshabilitar Accesibilidad',
      help: 'Ayuda',
      back: 'Atrás',
      LOCATION_ALERT_TITLE: 'Servicios de ubicación requeridos',
      LOCATION_ALERT_MESSAGE: 'Los servicios de ubicación no se han habilitado. Permita que esta aplicación use su información de ubicación.',
      LOCATION_ALERT_BUTTON: 'Configuración abierta',
      LogOut: 'Cerrar sesión',
      AdjustTime: 'Ajustar tiempo',
      SignIn: 'Inicia sesión con Google',
      CalendarList: 'Calendarios disponibles para sincronización',
      SynchronizeCalendars: 'Sincronizar calendarios',
      permisionNotGrandted: 'Permiso no otorgado',
      allowNotifications: 'Permita que CONPASS le envíe notificaciones',
      numbersOnly: 'Por favor solo inserte numeros',
      logInAgain: 'Sesión expirada Necesita iniciar sesión nuevamente',
      noAddress: 'No hay una dirección o descripción para este evento',
      getDirections: 'Obtener las direcciones',
      cancel: 'Cancelar',
      setRemindarTime: 'Establecer tiempo de recordatorio',
      remindarMessage: 'Establezca el tiempo para ser recordado antes de la clase / minutos',
      submit: 'enviar',
      CalendarListAlert: 'Los siguientes calendarios se sincronizarán.'
    }
  };

  // Set the locale once at the beginning of app.
  i18n.locale = Localization.locale;
  i18n.fallbacks = true;
};


export default SetLocaleContext;

export const UPDATE_TRIP_NOTIF_TITLE = "Trip Details Update";
export const UPDATE_TRIP_NOTIF_BODY =
  "Your trip has been modified by driver. Tap to see the changes.";

export const CANCEL_TRIP_NOTIF_TITLE = "Trip Cancelled";
export const CANCEL_TRIP_NOTIF_BODY =
  "Your trip has been cancelled by driver. Tap to create a trip request.";

export const PASSENGER_JOIN_NOTIF_TITLE = "Trip Join Request";
export const PASSENGER_JOIN_NOTIF_BODY = (fullName: string) =>
  `${fullName} wants to join your trip. You can confirm or deny.`;

export const PASSENGER_JOIN_CONFIRMED_NOTIF_TITLE = "Trip Join Confirmation";
export const PASSENGER_JOIN_CONFIRMED_NOTIF_BODY = "Your request to join the trip in confirmed by driver!";

export const PASSENGER_JOIN_REJECTED_NOTIF_TITLE = "Trip Join Rejection";
export const PASSENGER_JOIN_REJECTED_NOTIF_BODY =
  "Your request to join the trip is rejected by driver. Reach out to driver to check the reason.";


export interface User {
    id: number;
    email: string;
    firstName: string;
    surName: string;
    dadName: string;
    registrationDate: string;
    isActive: boolean;
    likesReceived: number;
    matches: number;
    city: string;
    country: string;
    region: string;
    address?: Address;
    addressId: number;
    profile?: Profile;
  }
  
  export interface Address {
    id: number;
    city: string;
    country: string;
    region: string;
    postalCode?: string;
    street?: string;
    houseNumber?: string;
  }
  
  export interface Profile {
    id: number;
    userId: number;
    gender?: string;
    birthDate?: string;
    aboutMe?: string;
    photos?: Photo[];
  }
  
  export interface Photo {
    id: number;
    profileId: number;
    url: string;
    isMain: boolean;
  }
  
  export interface Message {
    id: number;
    senderId: number;
    receiverId: number;
    content: string;
    sentDate: string;
    sender?: User;
    receiver?: User;
  }
  
  export interface Like {
    id: number;
    likerId: number;
    likedUserId: number;
    likeDate: string;
  }
  
  export interface Block {
    id: number;
    blockerId: number;
    blockedUserId: number;
    blockDate: string;
  }
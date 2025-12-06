import React from 'react';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface StatProps {
  value: string;
  label: string;
}

export enum ContentRegion {
  BRASIL = 'Brasil',
  EUROPA = 'Europa'
}
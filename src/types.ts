/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export interface NavLink {
  name: string;
  href: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface AudienceItem {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

export interface ServiceItem {
  text: string;
  icon: React.ReactNode;
}

export interface Package {
  name: string;
  desc: string;
  features: string[];
}

export interface SeparateService {
  title: string;
  desc: string;
  price: string;
  icon: React.ReactNode;
}

export interface WorkflowStep {
  step: string;
  title: string;
  desc: string;
}

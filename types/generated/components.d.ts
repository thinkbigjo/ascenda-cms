import type { Schema, Struct } from '@strapi/strapi';

export interface SharedLabelItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_label_items';
  info: {
    displayName: 'Label Item';
    icon: 'bulletList';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface SharedMarqueeItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_marquee_items';
  info: {
    displayName: 'Marquee Item';
    icon: 'text';
  };
  attributes: {
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedNavLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_nav_links';
  info: {
    displayName: 'Nav Link';
    icon: 'link';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedOpeningHours extends Struct.ComponentSchema {
  collectionName: 'components_shared_opening_hours';
  info: {
    displayName: 'Opening Hours';
    icon: 'clock';
  };
  attributes: {
    day: Schema.Attribute.String;
    time: Schema.Attribute.String;
  };
}

export interface SharedQuickLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_quick_links';
  info: {
    displayName: 'Quick Link';
    icon: 'link';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedValueItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_value_items';
  info: {
    displayName: 'Value Item';
    icon: 'star';
  };
  attributes: {
    desc: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.label-item': SharedLabelItem;
      'shared.marquee-item': SharedMarqueeItem;
      'shared.nav-link': SharedNavLink;
      'shared.opening-hours': SharedOpeningHours;
      'shared.quick-link': SharedQuickLink;
      'shared.value-item': SharedValueItem;
    }
  }
}

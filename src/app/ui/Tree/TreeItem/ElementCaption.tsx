import React from 'react';
import { TreeItemType } from 'ui/Tree/types';
import { theming } from 'ui/theme';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const rawClasses = {
  container: {
    cursor: 'pointer',

    ...theming('sidebar-treeItemCaption'),

    '&:hover': {
      textDecoration: 'underline'
    }
  }
};

const { classes } = jss.createStyleSheet(rawClasses).attach();

type Props = {
  item: TreeItemType;
};

export const ElementCaption = ({ item } : Props) => (
  <span id={`tree-caption_${item.id}`} className={classes.container}>
    {item.name}
  </span>
);

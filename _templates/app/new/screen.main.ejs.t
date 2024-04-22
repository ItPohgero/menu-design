---
to: src/screens/Screen<%= Name %>/Main.tsx
---

'use client'
import React, {Fragment} from 'react';
import Hooks<%= Name %> from '@/hooks/Hooks<%= Name %>/Main'

const Screen<%= Name %>  = () => {
const {state, setState} = Hooks<%= Name %>()
  return (
    <Fragment>
      {/* Your component code goes here */}
    </Fragment>
  );
};

export default Screen<%= Name %> ;



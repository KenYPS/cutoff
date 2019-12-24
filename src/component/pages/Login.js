import React, { useState, useEffect } from "react";
import styled from "styled-components";

// style
const StyledDefaultTemplate = styled.div``;

export default props => {
  const [value, setValue] = useState("");

  useEffect(() => {});

  return <StyledDefaultTemplate>this is DefaultTemplate</StyledDefaultTemplate>;
};

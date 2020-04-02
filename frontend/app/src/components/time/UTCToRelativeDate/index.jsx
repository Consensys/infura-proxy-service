/* --- Global --- */
import React, {useEffect, useState} from 'react';
import {DateTime} from 'luxon';

const EpochToRelativeDate = props => {
  const [utc] = useState(props.utc);
  const [relative, setRelative] = useState(0);

  useEffect(() => {
    const DateFromMillis = DateTime.fromISO(utc);
    if (DateFromMillis.isValid) setRelative(DateFromMillis.toRelative());
  }, [utc]);

  return relative ? <Atom.Span>{relative}</Atom.Span> : null;
};

export default EpochToRelativeDate;

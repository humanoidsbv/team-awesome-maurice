import React from 'react';

import TimeEntry from './TimeEntry';
import TimeEntryDate from './TimeEntryDate';
import { TimeEntryInterface } from './Interface';

interface TimeEntriesProps {
  timeEntries: TimeEntryInterface[]
}

function TimeEntries({ timeEntries }: TimeEntriesProps) {
  const timeZone = 'nl-NL'
  const dateFormat = {
    day: 'numeric',
    month: '2-digit',
    year: 'numeric',
  } as const;

  return (
    <>
      {timeEntries.map((timeEntry, i, array) => {
        const currentDate = new Date(timeEntry.startTimestamp).toLocaleDateString(timeZone, dateFormat);

        const isTop = currentDate === new Date(array[i + 1]?.startTimestamp).toLocaleDateString(timeZone, dateFormat) &&
                      currentDate !== new Date(array[i - 1]?.startTimestamp).toLocaleDateString(timeZone, dateFormat);

        const isCenter = currentDate === new Date(array[i + 1]?.startTimestamp).toLocaleDateString(timeZone, dateFormat) &&
                         currentDate === new Date(array[i - 1]?.startTimestamp).toLocaleDateString(timeZone, dateFormat);

        const isBottom = currentDate !== new Date(array[i + 1]?.startTimestamp).toLocaleDateString(timeZone, dateFormat) &&
                         currentDate === new Date(array[i - 1]?.startTimestamp).toLocaleDateString(timeZone, dateFormat);

        let renderState: string;
        
        if (isTop) {
          renderState = 'isTop';
        } else if (isCenter) {
          renderState = 'isCenter';
        } else if (isBottom) {
          renderState = 'isBottom';
        } else {
          renderState = 'standAlone';
        };
        
        return (
          <>
            {(i === 0 || currentDate !== new Date(timeEntries[i - 1].startTimestamp).toLocaleDateString(timeZone, dateFormat)) && (
              <TimeEntryDate startTimestamp={timeEntry.startTimestamp} key={timeEntry[i]} />
            )}
            <TimeEntry timeEntry={timeEntry} key={timeEntry.id} renderState={renderState} />
          </>
        );
      })}
    </>
  );
}

export default TimeEntries;


import React, { ReactElement } from 'react';

interface Props {
  student: string;
  score: number;
}

export default function ReportCard({ student, score }: Props): ReactElement {

  return (
    <div key={student}>
      <div>
        Student:
        {student}
      </div>
      <div>
        Score:
        {score}
      </div>
    </div>
  );
}

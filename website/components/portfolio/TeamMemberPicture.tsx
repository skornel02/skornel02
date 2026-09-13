import React from 'react';

interface PersonData {
  name: string;
  refer?: string;
  image?: string;
  externalImage?: string;
}

interface TeamMemberPictureProps {
  person: PersonData;
  width?: number;
  height?: number;
  className?: string;
}

export function TeamMemberPicture({
  person,
  width = 40,
  height = 40,
  className = 'avatar rounded-full border-0 ring ring-secondary',
}: TeamMemberPictureProps) {
  const imgSrc =
    person.image || person.externalImage || '/images/people/unknownhe.jpeg';

  const imgElement = (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={imgSrc}
      alt={person.name}
      title={person.name}
      className={`${className} object-cover`}
      style={{ width: `${width}px`, height: `${height}px` }}
    />
  );

  if (person.refer) {
    return (
      <a href={person.refer} target="_blank" rel="noopener noreferrer">
        {imgElement}
      </a>
    );
  }

  return imgElement;
}

export default TeamMemberPicture;

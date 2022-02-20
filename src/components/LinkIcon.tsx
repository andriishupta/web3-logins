import { FC } from 'react';

import Image, { ImageProps } from 'next/image';

const LinkIcon: FC<{ href: string } & ImageProps> = (props) => {
  const { href, ...rest } = props;
  return (
    <a style={{ display: 'flex' }} href={href} target={'_blank'} rel="noreferrer">
      <Image {...rest} width={'24px'} height={'24px'}/>
    </a>
  );
};

export default LinkIcon;

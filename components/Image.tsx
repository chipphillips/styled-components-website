import * as CSS from 'csstype';
import NextImage, { ImageProps as NextImageProps } from 'next/image';
import styled from 'styled-components';

/**
 * Props for the OptimizedImage component - a simple wrapper around next/image
 */
export interface OptimizedImageProps extends Partial<NextImageProps> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

/**
 * Optimized image component using Next.js Image for automatic lazy loading,
 * responsive images, and format optimization (WebP/AVIF).
 */
export function OptimizedImage({
  src,
  alt,
  width = 800,
  height = 600,
  ...props
}: OptimizedImageProps) {
  return (
    <NextImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      placeholder="empty"
      {...props}
    />
  );
}


export interface ImageProps {
  caption?: string;
  captionSpacing?: number;
  height: number;
  margin?: number;
  /**
   * Custom render function for the image. If not provided, uses Next.js Image
   * with automatic optimization and lazy loading.
   */
  renderImage?: (props: Pick<ImageProps, 'src' | 'video'>) => React.ReactNode;
  src: string;
  video?: boolean;
  width: number;
  /**
   * Alt text for the image. Required for accessibility when not using renderImage.
   */
  alt?: string;
  /**
   * Priority loading - set to true for above-the-fold images
   */
  priority?: boolean;
}

export default function Image({
  caption,
  captionSpacing,
  height,
  margin = 40,
  renderImage,
  width,
  alt = '',
  priority = false,
  ...rest
}: ImageProps) {
  const aspectRatio = String((height / width) * 100) + '%';

  // Render content based on whether renderImage is provided
  const renderContent = () => {
    // If renderImage is provided, use custom rendering (for animations, etc.)
    if (renderImage) {
      return renderImage(rest);
    }

    // Default: use Next.js Image with optimization and lazy loading
    return (
      <NextImage
        src={rest.src}
        alt={alt}
        layout="fill"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
        loading={priority ? 'eager' : 'lazy'}
        priority={priority}
        objectFit="cover"
      />
    );
  };

  return (
    <Figure $margin={margin}>
      <Main $width={width}>
        <ImageWrapper $aspectRatio={aspectRatio}>{renderContent()}</ImageWrapper>

        {caption && <Caption $captionSpacing={captionSpacing}>{caption}</Caption>}
      </Main>
    </Figure>
  );
}

export type VideoProps = ImageProps;

export const Video = (props: VideoProps) => <Image {...props} video />;

// This component might look a little complex
// because one could argue that keeping the aspect ratio
// of an image can be solved with `height: auto`,
// but it's actually not that easy if you want to prevent
// element flickering

// Because if you want to do that, you need to set the aspect
// ratio of the image's container BEFORE the image loads

const Figure = styled.figure<{ $margin: number }>`
  display: block;
  text-align: center;
  margin: ${props => props.$margin}px 0;
  max-width: 100%;

  & img {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

  & .fade-enter {
    opacity: 0.01;
  }

  & .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 500ms ease-in;
  }

  & .fade-exit {
    opacity: 1;
  }

  & .fade-exit.fade-exit-active {
    opacity: 0.01;
    transition: opacity 300ms ease-in;
  }
`;

const Main = styled.div<{ $width: number }>`
  margin: 0 auto;
  max-width: 100%;
  width: ${props => props.$width}px;
`;

const Caption = styled.p<{ $captionSpacing?: number }>`
  color: #999;
  font-size: 12px;
  margin: 0;
  text-align: center;
  ${props => (props.$captionSpacing ? `margin-top: ${props.$captionSpacing}px;` : '')};
`;

const ImageWrapper = styled.div<{ $aspectRatio: CSS.Properties['paddingBottom'] }>`
  position: relative;
  padding-bottom: ${props => props.$aspectRatio};
`;

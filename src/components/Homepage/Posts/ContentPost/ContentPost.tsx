import { Stack } from '@mui/material';
import { Publication } from '../../../../@types/publication';
import Post from '../Post/Post';

interface ContentPostProps {
  // eslint-disable-next-line react/require-default-props
  publications?: Publication[];
}

function ContentPost({ publications }: ContentPostProps) {
  return (
    <div>
      {publications && (
        <Stack direction="column" gap="2rem">
          {publications.map((publicationElement) => (
            <Post key={publicationElement.id} {...publicationElement} />
          ))}
        </Stack>
      )}
    </div>
  );
}

export default ContentPost;

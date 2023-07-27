import { Stack } from '@mui/material';
import { Publication } from '../../../../@types/publication';

interface ContentPostProps {
  // eslint-disable-next-line react/require-default-props
  publication?: Publication[];
}

function ContentPost({ adverts }: ContentPostProps) {
  return (
    <div>
      {Publications && (
        <Stack direction="row" flexWrap="wrap" gap="2rem">
          {publications.map((publication) => (
            <Post key={publication.id} {...publication} />
          ))}
        </Stack>
      )}
    </div>
  );
}

export default ContentPost;

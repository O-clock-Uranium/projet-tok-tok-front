import { Stack } from '@mui/material';
import { Reply } from '../../../../../@types/publication';
import OneComment from '../Comment';

interface ContentCommentProps {
  replies: Reply[];
}

function ContentPost({ replies }: ContentCommentProps) {
  return (
    <div>
      {replies && (
        <Stack direction="column" gap="2rem">
          {replies.map((reply) => (
            <OneComment key={reply.id} {...reply} />
          ))}
        </Stack>
      )}
    </div>
  );
}

export default ContentPost;

import { Stack } from '@mui/material';
import { useEffect } from 'react';
import { Publication } from '../../../../@types/publication';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { fetchPosts } from '../../../../store/reducers/publications';
import Post from '../Post';

interface ContentPostProps {
  // eslint-disable-next-line react/require-default-props
  publications?: Publication[];
}

function ContentPost() {
  const publications = useAppSelector((state) => state.publications.list);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

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

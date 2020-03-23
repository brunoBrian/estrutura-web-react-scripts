import React from 'react';

import { useFetch } from '../../services/useFetch';
import { Text, Container } from './Title-style';

function Title() {
  const [loading, response, error] = useFetch(
    'https://api.github.com/users/brunoBrian'
  );

  return (
    <Container>
      {response && <Text>{response.name}</Text>}
      {loading && (
        <div>
          <h2>Loading...</h2>
        </div>
      )}
      {error && (
        <div>
          <h2>Erro...</h2>
        </div>
      )}
    </Container>
  );
}

export default Title;

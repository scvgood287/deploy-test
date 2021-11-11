import React from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
// import { ExistImageArea, PrevImageArea, UploadImageArea } from '../uploadForm/index'
import ExistImageArea from './ExistImageArea'
import PrevImageArea from './PrevImageArea'
import UploadImageArea from './UploadImageArea'
import {selectGamesId} from '../../state/state'
import { useAtom } from 'jotai'

const UploaderForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

const Post = () => {
  const router = useRouter();
  const { props } = router.query;

  if (props) {
    const { name, _id ,tagNames, updated } = JSON.parse(props);
    const { main, sub, optional } = tagNames;
    const [gameId, setGameId] = useAtom(selectGamesId);
    console.log(props);
  
    setGameId(_id);
  
  
    return (
        router.isFallback ?
        <div>loading</div> : 
        <UploaderForm>
          <UploadImageArea id={_id}/>
          <PrevImageArea  id={_id} tags={tagNames} update={updated} gameName={name}/>
          <ExistImageArea />
        </UploaderForm> 
    );
  } else {
    return <div>loading</div>;
  }
}

export default Post;
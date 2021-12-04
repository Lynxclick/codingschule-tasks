import React from 'react';
import styled from 'styled-components';

function AddNews() {
    return (
        <AddContainer>
            <AddingNews>
                <input placeholder="Was gibt es neues?"></input>
            </AddingNews>
            <AddButton>
                <button>senden</button>
            </AddButton>
        </AddContainer>
    )
}

export default AddNews

const AddContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
`

const AddingNews = styled.div`
    width: 100%;
    border: 2px solid #012340;
`

const AddButton = styled.div`
    background-color: pink;
`

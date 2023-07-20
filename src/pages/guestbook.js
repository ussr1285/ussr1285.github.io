import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Utterances from '../components/comments'

const Guestbook = () => {
    return (
        <Layout pageTitle="방명록">
            <Utterances/>
        </Layout>
    )
}

export const Head = () => <Seo title="guestbook" />

export default Guestbook

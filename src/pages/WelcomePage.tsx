import React, { useEffect, useContext } from 'react';

import colors from 'styles/colors';
import { StoreContext } from 'store';
import { changePageTitle } from 'store/page';
import Item from 'components/Item';
import Paragraph from 'components/semantic/Paragraph';
import Bold from 'components/semantic/Bold';

const pageTitle = 'Welcome';

const WelcomePage: React.FC = () => {
    const { dispatch } = useContext(StoreContext);

    useEffect(() => changePageTitle(dispatch, { text: pageTitle, active: true }), []);

    return (
        <div>
            <ul>
                <Item
                    to='/board'
                    title='Todo List'
                    done={false}
                />
                <Item
                    to='/homework'
                    title='Homework'
                    done={false}
                />

                <br />
                <br />

                <Paragraph>
                    Hello guys,<br />
                    above you can find two links. <Bold color={colors.app.primaryRed}>The first link</Bold> is pointing to simple todo app.
                </Paragraph>

                <Paragraph>
                    I used <Bold>hooks</Bold> and <Bold>functional components</Bold> only. Some of the hooks were new to me and I did some investigation how to correctly used them.
                </Paragraph>

                <Paragraph>
                    For styling the app I used <Bold>styled-components</Bold>. It is pretty easy to use and you dont need to learn any SASS bullshit syntax. All you need is javascript :)
                </Paragraph>

                <Paragraph>
                    State is managed by react <Bold>context api</Bold>, no redux here.
                    I also wrote all the <Bold>webpack</Bold> building code.
                </Paragraph>

                <Paragraph>
                    App is not perfect, there are some glitches and I am aware of it. Mainly API is very simple, without possibility to add new todo and I am not sure if webpack builds prod build correctly. Most of the time I spent by setting up the webpack and environment things, resolving typescript errors (mostly related to styled-components) and reading about new things I didnt know.
                </Paragraph>

                <Paragraph>
                    App should not do any unnecessary re-renders. You can checkc by going to "/board" page and check/uncheck todo item and observe the console. Only item currently checked should be re-rendered.
                </Paragraph>

                <Paragraph>
                    <Bold color={colors.app.primaryRed}>The second link</Bold> is pointing to my homework. You can find there edited code you have sent me. I made changes and left some comments.
                </Paragraph>
            </ul>
        </div>
    );
}

export default WelcomePage;

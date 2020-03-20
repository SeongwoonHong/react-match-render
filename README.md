## React-Match-Render
> Render components conditionally inside render function in a neat way.

### Installation
`
npm i -S react-match-render
`

### Usage
```javascript
import MatchRender from 'react-match-render';

...

const userType = ..
const isLoggedIn = ...

<MatchRender
    requirements={[true, 'ADMIN']}
    conditions={[isLoggedIn, userType]}
>
    <PrivateRoutes />
</MatchRender>
```



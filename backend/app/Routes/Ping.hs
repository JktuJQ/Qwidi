{- | 'Routes.Ping' submodule implements simple @ping@ endpoint,
which should always return True. 
-}
module Routes.Ping where

import Servant (Handler)

{- | Endpoint for '/ping', always returns True as a JSON.
-}
ping :: Handler Bool
ping = return True


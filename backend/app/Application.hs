{- | 'Application' module sets up web application that
serves API that is provided by 'Routes' module.
-}
module Application
    (
    -- * Setup functions
      application
    , runServer
    ) where

import Data.Proxy

import Servant (serve)
import Network.Wai (Application)
import Network.Wai.Handler.Warp (run)

import Routes (API, server)

{- | Creates web application with specified API.
-}
application :: Application
application = serve (Proxy :: Proxy API) server

{- | Starts the server on specified @port@.
-}
runServer :: Int -> IO ()
runServer port = run port application

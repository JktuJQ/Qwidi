{-# LANGUAGE DataKinds     #-}
{-# LANGUAGE TypeOperators #-}

{- | 'Routes' module combines all REST API endpoints into one type - @API@
and serves that API by @server@ function.
-}
module Routes
    (
    -- * API creation
      API
    , server
    ) where

import Servant ((:>), Get, JSON, Server)

import Routes.Ping (ping)

{- | REST API type signature.
-}
type API = "ping" :> Get '[JSON] Bool

{- | Server endpoints.
-}
server :: Server API
server = ping


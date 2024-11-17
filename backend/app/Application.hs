{-# LANGUAGE DeriveGeneric #-}
{-# LANGUAGE DataKinds #-}
{-# LANGUAGE TypeOperators #-}

module Application where

import GHC.Generics

import Data.Aeson

import Network.Wai
import Network.Wai.Handler.Warp
import Servant

-- REST API type signature
type API = Get '[JSON] Data

data Data = Data
 deriving Generic
instance ToJSON Data

-- Server endpoints
server :: Server API
server = return Data

-- Creates web application with specified API
application :: Application
application = serve (Proxy :: Proxy API) server

-- Starts the server
runServer :: Int -> IO ()
runServer port = run port application

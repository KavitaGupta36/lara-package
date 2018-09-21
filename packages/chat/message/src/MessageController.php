<?php

namespace Chat\Message;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class MessageController extends Controller
{
    public function getMessage()
    {
    	echo "string";
    }
}
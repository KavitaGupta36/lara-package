<?php

namespace Chat\Message;

use App\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Chat\Message\Models\Message;
use App\Events\MessageSent;
use Pusher\Laravel\Facades\Pusher;

class ChatController extends Controller
{
    public function sendMessage(Request $request)
    { 
        $sender_id = Auth::id();
        $newMessage = Message::create([
            'sender_id' => $sender_id,
            'receiver_id' => $request->receiver_id,
            'message' => $request->message,
        ]);
        //event(new MessageSent($newMessage));
    }

    public function message(){
        $data = Message::all();
        return view('chat::chatlist',compact('data'));
    }

    public function contacts()
    {
        $contacts = User::where('id', '!=', Auth::id())->get();
        return response()->json($contacts);
    }

    public function getMessage($id)
    {
        $receiver_id = Auth::id();
        $allMessage = Message::where(['receiver_id' => $id , 'sender_id' => $receiver_id , 'seen' => 1])->orWhere(['receiver_id' => $receiver_id , 'sender_id' => $id , 'seen' => 1])->get();

        return $allMessage;
    }

    public function fetchUnreadMessage($id)
    {
        $receiver_id = Auth::id();
        $message = Message::where(['receiver_id' => $id , 'sender_id' => $receiver_id , 'seen' => 0])->get();

        return $message;
    }

    public function sendByPusher()
    {
        $data['message'] = "Message for pusher testing";
        Pusher::trigger('my-channel', 'my-event', $data);
        return view('chat::pusher',compact('data'));
    }
}

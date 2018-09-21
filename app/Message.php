<?php
//namespace App;
namespace Chat\Message\Models;

use App\User;
use Illuminate\Database\Eloquent\Model;
use App\Http\Models\Model as MessageModel;

class Message extends Model
{    
    protected $fillable = [
        'message', 'receiver_id', 'sender_id',
    ];

    public function user()
    {
    	return $this->belongsTo('App\User');
    }

    public function fetchMessage()
    {
       return Message::with('user')->get();
    }
}

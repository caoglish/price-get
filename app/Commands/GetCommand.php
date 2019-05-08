<?php

namespace App\Commands;

use Illuminate\Console\Scheduling\Schedule;
use LaravelZero\Framework\Commands\Command;
use GuzzleHttp\Client as GuzzleClient;
use Goutte\Client as GoutteClient;

class GetCommand extends Command
{
    /**
     * The signature of the command.
     *
     * @var string
     */
    protected $signature = 'get {url}';

    /**
     * The description of the command.
     *
     * @var string
     */
    protected $description = 'get price info';

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {


        $url = $this->argument('url');
        $this->info($url);
        //$parsed_url=parse_url($url);
        //$domain_name=$parsed_url['scheme']."://".$parsed_url["host"];
        $guzzleClient  = new GuzzleClient([
        	'timeout'  => 10.0 ,
        	 'headers' => [
		        'User-Agent' => 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36',
		       
		      
		    ]
        ]);
        $goutteClient = new GoutteClient();
        $goutteClient->setClient($guzzleClient);

        $crawler=$goutteClient->request('get',$url);
        $r=$crawler
        	->filter('.regular-price')
        	//->selectLink("Staff")->link()
            ->each(function($node,$i){
                var_dump($node->text());
                return $node->text();
               
            });
            ;

            var_dump($r);



    }

    /**
     * Define the command's schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule $schedule
     * @return void
     */
    public function schedule(Schedule $schedule): void
    {
        // $schedule->command(static::class)->everyMinute();
    }
}

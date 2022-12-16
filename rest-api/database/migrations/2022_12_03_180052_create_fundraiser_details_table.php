<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fundraiser_details', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('fundraisers');
            $table->string('full_name');
            $table->string('address');
            $table->string('selfie_img');
            $table->string('nik_ktp')->unique();
            $table->string('ktp_img');
            $table->string('phone_number')->unique();
            $table->string('bank_name');
            $table->string('bank_account')->unique();
            $table->string('contract_file');
            $table->boolean('status')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('fundraiser_details');
    }
};

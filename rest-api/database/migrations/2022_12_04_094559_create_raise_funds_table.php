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
        Schema::create('raise_funds', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('fundraisers');
            $table->string('title')->unique();
            $table->string('description');
            $table->foreignId('category_id')->constrained('categories');
            $table->integer('funds');
            $table->integer('has_funds')->default('0');
            $table->string('title_img');
            $table->string('img1');
            $table->string('img2');
            $table->string('img3');
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
        Schema::dropIfExists('raise_funds');
    }
};

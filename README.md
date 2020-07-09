# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## users テーブル
|column||type||option|
|------||----||------|
|name||string||null: false|
|email||text||null: false, unique: true|
|password||string||null: false|

## Association
- has_many :messages
- has_many :groups
- has_many :users_groups
- has_many :groups, through: :users_groups


## groups テーブル
|column||type||option|
|------||----||------|
|name||string||null: false, unique: true|

## Association
- has_many :users_groups
- has_many :users, through: :users_groups


## messages テーブル
|column||type||option|
|------||----||------|
|message||text||null: false|
|image||text|||
|created_at||timestamp|
|user_id||integer||null :false, foreign_ker: true|

## Association
- belongs_to :user


## users_groups テーブル

|column||type||option|
|------||----||------|
|user_id||integer||null: false, foreign_key: true|
|group_id||integer||null: false, foreign_key: true|

## Association
- belongs_to :group
- belongs_to :user

class CreateNetworks < ActiveRecord::Migration
  def change
    create_table :networks do |t|
      t.integer :count_on_waitlist
      t.string :name
      t.integer :num_members_needed_for_launch

      t.timestamps
    end
  end
end

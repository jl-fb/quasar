export default {
    methods: {
        onSubmit() {
            this.$refs.modalTaskName.$refs.name.validate();
            // if (this.$refs.name.hasError || this.$refs.name.isDirty == null) {
            //   return;
            // } else {
            //   this.submitTask();
            // }
            if (!this.$refs.modalTaskName.$refs.name.hasError) {
                console.log("mixix");
                this.submitTask();
            }
        },
    },
    components: {
        ModalHeader: require("src/components/Tasks/Modals/Shared/ModalHeader").default,
        ModalTaskName: require("src/components/Tasks/Modals/Shared/ModalTaskName").default,
        ModalDueDate: require("src/components/Tasks/Modals/Shared/ModalDueDate").default,
        ModalDueTime: require("src/components/Tasks/Modals/Shared/ModalDueTime").default,
        ModalButtons: require("src/components/Tasks/Modals/Shared/ModalButtons").default
    },
}
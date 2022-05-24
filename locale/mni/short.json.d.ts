import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'mni';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;
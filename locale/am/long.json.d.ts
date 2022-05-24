import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'am';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;
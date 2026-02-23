import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'ba';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;
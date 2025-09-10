import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'ie';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;
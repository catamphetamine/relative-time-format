import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'sc';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;
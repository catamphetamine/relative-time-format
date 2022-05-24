import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'jgo';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;
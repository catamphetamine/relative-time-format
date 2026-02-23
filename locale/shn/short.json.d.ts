import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'shn';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;
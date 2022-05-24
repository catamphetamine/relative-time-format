import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'si';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;
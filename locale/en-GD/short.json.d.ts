import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-GD';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;